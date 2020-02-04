import React from 'react'

class MemeGenerator extends React.Component{
    constructor(){
        super();
        this.state= {
            topText: '',
            bottomText: '',
            randomImg: 'https://imgflip.com/s/meme/Distracted-Boyfriend.jpg',
            allMemeImages: [],
            textColor: 'red'
        }
    }

    componentDidMount(){
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                console.log(typeof memes)
                this.setState({allMemeImages: memes})
            })
            .catch(error => {
                console.log("There was a eror"+error)
            })
    }

    handleChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        var allMemes = this.state.allMemeImages
        var totalNumberOfMemes = Object.keys(allMemes).length
        var randomNumber = Math.floor(Math.random() * Math.floor(totalNumberOfMemes))
        var randomMeme = Object.values(allMemes)[randomNumber-1]
        var randomMemeImage = randomMeme.url
        this.setState({
            randomImg: randomMemeImage
        })
    }

    render(){
        return(
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <label>Top Text</label>
                    <input value= {this.state.topText} name="topText" onChange = {this.handleChange}/>
                    <label>Bottom Text</label>
                    <input value= {this.state.bottomText} name="bottomText" onChange = {this.handleChange}/>
                    <label>Text Color</label>
                    <select name="textColor" onChange={this.handleChange}>
                        <option value="red">Red</option>
                        <option value="black">Black</option>
                        <option value="white">White</option>
                        <option value="green">Green</option>
                        <option value="blue">Blue</option>
                    </select>
                    <button style ={{background: "chocolate"}}>Change Image</button>
                </form>
                <br/>
                <div className = "memes">
                    <img src= {this.state.randomImg} alt ="" style={{display:"block", margin:"0 auto"}}/>
                    <h2 className = "top" style={{color:this.state.textColor}}>{this.state.topText}</h2>
                    <h2 className = "bottom" style={{color:this.state.textColor}}>{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
 
}

export default MemeGenerator