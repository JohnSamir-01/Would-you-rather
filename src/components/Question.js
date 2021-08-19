import React from 'react'
import { connect } from 'react-redux'
import Image from 'react-bootstrap/Image'
import { withRouter} from 'react-router';
function Question(props) {
    const {avatarURL, name, text,id,answered} = props;
  
    const handleQuestion=(e)=>{
        e.preventDefault();
        if(!answered || answered){
          props.history.push(`/questions/${id}`)
           }
    }
    return (
        <div style={{width: 300}}>
            <br/>
            <Image
			src={require('../icons/'+avatarURL).default}
			roundedCircle
			fluid
			width="60"
			height="60"
			alt= {name + 'avatar'}/>

                <div className='question-info'>
                  <div>
                    <h3>{name} Asks: </h3>
                    <span>Would you Rather </span>
                    <p>{text}</p>
                    <button className="btn btn-outline-secondary" onClick={handleQuestion}>
                      Veiw poll...
                    </button>
                  </div>
                 
                   
                </div>
                <br/>
                <p>___________________________________________</p>
        </div>
        
        
    )
}

function mapStateToProps ({ users, questions, auth},{id}) {
    const{author }=questions[id];
    const name = users[author].name;
    const avatarURL = users[author].avatarURL

    const text = questions[id].optionOne.text;

    const result = text.slice(0, 15) + (text.length > 15 ? "..." : "");
    const answered = Object.keys(users[auth].answers).includes(id) ;
    return {
      name: name,
      avatarURL: avatarURL,
      text: result,
      answered
    }
  }

export default withRouter(connect(mapStateToProps)(Question))
