function Game() {
    return (
        <div className="App">
            <p>Dice and Duels</p>
            <p id="userCont">You: <span id="user"></span></p>
            <p id="oppNameCont">Opponent: <span id="oppName"></span></p>

            <br />
            <p id="valueCont">Class: <span id="value"></span></p>
            <br />
            <p id="whosTurn">Who's turn</p>

            <div>
                <input placeholder="Name..." id="name" autoComplete="off" />
            </div>
            <button id="find">Search for a player</button>

            <div id="bigCont">
                <div id="cont">
                    <p>Enemy Dice</p>
                    <p>Enemy HP: <span id="enemyHp"></span></p>
                    <p><span id="enDiceOne"></span></p>
                    <p><span id="enDiceTwo"></span></p>
                    <p><span id="enDicethree"></span></p>
                </div>
                <div id="cont">
                    <button id="action" className="btn action"></button>
                    <p>Action</p>
                    <button id="melee" className="btn melee"></button>
                    <p>Melee</p>
                    <button id="magic" className="btn magic"></button>
                    <p>Magic</p>
                    <button id="special" className="btn special"></button>
                    <p>Special Action</p>
                </div>
                <p>CHAR</p>
                <p>HP: <span id="hp"></span></p>
                <p><span id="iceOne"></span></p>
                <p><span id="diceTwo"></span></p>
                <p><span id="dicethree"></span></p>
            </div>
        </div>
    );
}

export default Game;