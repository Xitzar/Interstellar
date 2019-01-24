import { MonteCarloNode } from "./monte-carlo-node";

export class MonteCarlo {

  game: any = false;
  UCB1ExploreParam: any = false;
  nodes: Map<string, MonteCarloNode>;

  constructor(game: any, UCB1ExploreParam = 2) {
    this.game = game;
    this.UCB1ExploreParam = UCB1ExploreParam;
    this.nodes = new Map(); // map: State.hash() => MonteCarloNode
  }


  /** If given state does not exist, create dangling node. */
  makeNode(state: any) {

    if (!this.nodes.has(state.hash())) {

      let unexpandedPlays = this.game.legalPlays(state).slice();
      let node = new MonteCarloNode(null, null, state, unexpandedPlays);

      this.nodes.set(state.hash(), node);
    }
  }

  /** From given state, repeatedly run MCTS to build statistics. */
  runSearch(state: any, timeout = 3) {

    this.makeNode(state);

    let end = Date.now() + timeout * 1000;
    while (Date.now() < end) {

      let node = this.select(state);
      let winner = this.game.winner(node.state);

      if (node.isLeaf() === false && winner === null) {
        node = this.expand(node);
        winner = this.simulate(node);
      }
      this.backpropagate(node, winner);
    }
  }


  /** Phase 1, Selection: Select until not fully expanded OR leaf */
  select(state: any) {

    let node: any = this.nodes.get(state.hash());
    while(node.isFullyExpanded() && !node.isLeaf()) {
      let plays = node.allPlays();
      let bestPlay;
      let bestUCB1 = -Infinity;
      for (let play of plays) {
        let childUCB1 = node.childNode(play).getUCB1(this.UCB1ExploreParam);
        if (childUCB1 > bestUCB1) {
          bestPlay = play;
          bestUCB1 = childUCB1;
        }
      }
      node = node.childNode(bestPlay);
    }
    return node;
  }

  /** Phase 2, Expansion: Expand a random unexpanded child node */
  expand(node: any) {

    let plays = node.unexpandedPlays();
    let index = Math.floor(Math.random() * plays.length);
    let play = plays[index];
    let childState = this.game.nextGameState(node.state, play);
    let childUnexpandedPlays = this.game.legalPlays(childState);
    let childNode = node.expand(play, childState, childUnexpandedPlays);

    this.nodes.set(childState.hash(), childNode);

    return childNode;
    // return childNode
  }

  /** Phase 3, Simulation: Play game to terminal state, return winner */
  simulate(node: any) {

    let state = node.state;
    let winner = this.game.winner(state);

    while (winner === null) {
      let plays = this.game.legalPlays(state);
      let play = plays[Math.floor(Math.random() * plays.length)];
      state = this.game.nextGameState(state, play);
      winner = this.game.winner(state);
    }

    return winner;
    // return winner
  }

  /** Phase 4, Backpropagation: Update ancestor statistics */
  backpropagate(node: any, winner: any) {
    while (node !== null) {
      node.n_plays += 1;
      // Parent's choice
      if (node.state.isPlayer(-winner)) {
        node.n_wins += 1;
      }
      node = node.parent;
    }
  }

  /** Get the best move from available statistics. */
  bestPlay(state: any, policy = "robust") {

    this.makeNode(state);

    // If not all children are expanded, not enough information
    if (this.nodes.get(state.hash()).isFullyExpanded() === false) {
      throw new Error("Not enough information!");
    }

    let node: any = this.nodes.get(state.hash());
    let allPlays = node.allPlays();
    let bestPlay;

    // Most visits (robust child)
    if (policy === "robust") {
      let max = -Infinity;
      for (let play of allPlays) {
        let childNode = node.childNode(play);
        if (childNode.n_plays > max) {
          bestPlay = play;
          max = childNode.n_plays;
        }
      }
    } else if (policy === "max") {
      let max = -Infinity;
      for (let play of allPlays) {
        let childNode = node.childNode(play);
        let ratio = childNode.n_wins / childNode.n_plays;
        if (ratio > max) {
          bestPlay = play;
          max = ratio;
        }
      }
    }

    return bestPlay;
  }

  getStats(state: any) {
    let node: any = this.nodes.get(state.hash());
    let stats = {
      n_plays: node.n_plays,
      n_wins: node.n_wins,
      children: []
    };

    for (let child of node.children.values()) {
      if (child.node === null) {
        stats.children.push({
          play: child.play,
          n_plays: null,
          n_wins: null
        });
      } else {
        stats.children.push({
          play: child.play,
          n_plays: child.node.n_plays,
          n_wins: child.node.n_wins
        });
      }
    }
    return stats;
  }
}
