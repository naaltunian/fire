import React from "react";
import { Grid, Segment } from 'semantic-ui-react'
import { Card, Icon, Image } from 'semantic-ui-react'


const cards = {
  width: '300px',
  height: '450px',
  margin: '10px'
}

const Photo = (props) => {
    return (
        <div style={cards}>
          <Grid.Column >
            <Grid.Row >
              <Card style={cards}>
                <Image src="https://cors-anywhere.herokuapp.com/https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiblcPP4pfeAhWvrVkKHd97AmAQjRx6BAgBEAU&url=https%3A%2F%2Fwww.bocamag.com%2Ftensions-diminish-between-boca-and-the-greater-boca-beach-and-park-district-and-other-news-of-note%2F&psig=AOvVaw1OjnNCZLHKNS6QL3-tMgFr&ust=1540219396152816" width='282px' height='200px'></Image>
                <p>{props.tweet.created_at}</p>
                <p>{props.tweet.text}</p>
              </Card>
           </Grid.Row>
          </Grid.Column>
        </div>
    )
}

export default Photo;