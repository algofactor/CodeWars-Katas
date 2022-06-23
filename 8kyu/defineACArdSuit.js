function defineSuit(card) {
    // good luck
    return card[1] == '♣' ? 'clubs' : card[1] == '♠' ? 'spades' : card[1] == '♦' ? 'diamonds' : 'hearts';
}