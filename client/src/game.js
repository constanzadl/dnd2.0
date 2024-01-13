import { useState, useEffect } from 'react';
import io from 'socket.io-client';
//Emit or listen to events
const socket = io.connect("http://localhost:3001");

function Game() {
    const [playing, setPlaying] = useState(false)
    const [player, setPlayer] = useState('');
    const [oponent, setOponent] = useState('');
    const [playerClass, setPlayerClass] = useState('');
    const [oponentClass, setOponentClass] = useState('');
    const [enemyHP, setEnemyHP] = useState(0);
    const [enemyDice, setEnemyDice] = useState([0, 0, 0]);
    const [actionBtn, setActionBtn] = useState('');
    const [magicBtn, setMagicBtn] = useState('');
    const [meleeBtn, setMeleeBtn] = useState('');
    const [specBtn, setSpecBtn] = useState();
    const [dieOne, setDieOne] = useState(1);
    const [dieTwo, setDieTwo] = useState(2);
    const [dieThree, setDieThree] = useState(3);
    const [actionSet, setActionSet] = useState(false);
    const [clickOne, setClickOne] = useState(false);
    const [clickTwo, setClickTwo] = useState(false);
    const [clickThree, setClickThree] = useState(false);

    const [currentAction, setCurrentAction] = useState(0);

    const searchPlayer = () => {
        
        if (player == '') {
            alert("enter a player name!")
        }
        else {
            socket.emit("join_game", { Player: player });
            alert('searching for another player...')
            //alert('connected with: ', data.PlayerName);
        }
        socket.on("room_welcome", (data) => {
            setPlaying(data.roomFull);
            setOponent(data.oponent);
        })
    };

    const EndTurn = () => {
        console.log('end')
    };

    return (
        <div className="Game">
            <div className="nameInput">
                <input placeholder="Name..." id="name" autoComplete="off" onChange={(e) => { setPlayer(e.target.value) }} />
                <div className="class">
                    <button className='btn'>Barbarian</button>
                    <button className='btn'>Thief</button>
                </div>
                <button onClick={searchPlayer} id="find">Search for a player</button>
            </div>
            <>{playing ?      <div className="Playing">
                <div className="players">
                    <p id="userCont">You: <span id="user">{player}</span></p>
                    <p id="oppNameCont">Opponent: <span id="oppName">{oponent}</span></p>
                </div>
                <br />
                <p id="valueCont">Class: <span id="value">{playerClass}</span></p>
                <br />
                <div id="bigCont">
                    <div id="cont">
                        <p>Enemy HP: <span id="enemyHp">{enemyHP}</span></p>

                        <p>Enemy Dice</p>
                        <div className="enDice">
                            <p><span className="diceBtn" id="enDiceOne">{enemyDice[0]}</span></p>
                            <p><span className="diceBtn" id="enDiceTwo">{enemyDice[1]}</span></p>
                            <p><span className="diceBtn" id="enDicethree">{enemyDice[2]}</span></p>
                        </div>

                    </div>
                    <p>Your game:</p>
                    <div className="actionButtons" id="cont">
                        <div>   <button id="action" className="btn action" onClick={() => { setActionBtn(currentAction); setCurrentAction(0); setActionSet(true); }}>{actionBtn}</button>
                            <p>Action</p>
                            <button id="melee" disabled={!actionSet} className="btn melee" onClick={() => { setMeleeBtn(currentAction); setCurrentAction(0); }}>{meleeBtn}</button>
                            <p>Melee</p></div>
                        <div>          <button id="magic" disabled={!actionSet} className="btn magic" onClick={() => { setMagicBtn(currentAction); setCurrentAction(0); }}>{magicBtn}</button>
                            <p>Magic</p>
                            <button id="special" disabled={!actionSet} className="btn special" onClick={() => { setSpecBtn(currentAction); setCurrentAction(0); }}>{specBtn}</button>
                            <p>Special Action</p></div>

                    </div>
                    <p>CHARACTER PROFILE</p>
                    <p>HP: <span id="hp"></span></p>
                    <div className="actionDice">
                        <button className="diceBtn" disabled={clickOne} id="iceOne" onClick={() => { setCurrentAction(dieOne); setClickOne(true); }}>{dieOne}</button>
                        <button className="diceBtn" disabled={clickTwo} id="diceTwo" onClick={() => { setCurrentAction(dieTwo); setClickTwo(true); }}>{dieTwo}</button>
                        <button className="diceBtn" disabled={clickThree} id="dicethree" onClick={() => { setCurrentAction(dieThree); setClickThree(true); }}>{dieThree}</button>
                    </div>
                </div>
                <button className="endTurn" onClick={EndTurn}>End Turn</button>

            </div> : <></> }</>
       

        </div>
    );
}

export default Game;