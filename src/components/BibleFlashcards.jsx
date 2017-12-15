import React, { Component } from "react";
import { observable, action } from "mobx";
import { inject, observer } from "mobx-react";
import Grid from 'material-ui/Grid';

import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

@inject("globalStore") @observer
class BibleFlashcards extends React.Component {

    constructor(props) {
        super(props);
        this.toggleCard = this.toggleCard.bind(this);
        this.closeCard = this.closeCard.bind(this)
    }

    toggleCard() {
        this.props.globalStore.flashCardsStore.toggleCard();
    }

    closeCard() {
        this.props.globalStore.flashCardsStore.closeCard();
    }

    render() {
        return (
            <div>
                <div style={{ padding: 20 }}>
                    <Grid container spacing={40} alignItems="center" direction="column" justify="flex-start" >
                        <Grid item xs={6}>
                            <Card className="Card" onClick={this.toggleCard}>
                                <CardContent>
                                    <Typography type="headline" component="h2">Matthew 5</Typography>
                                    <Typography className="Type">gospels</Typography>
                                </CardContent>
                            </Card>
                            <div style={{ padding: 20 }}/>
                            <Card className="Card" onClick={this.closeCard} style={{visibility: this.props.globalStore.flashCardsStore.isDefVisible}}>
                                <CardContent>
                                    <Typography type="headline" component="h2">The Sermon On The Mount,
                                        The Beattitudes,
                                        Salt and Light,
                                        Christ Came to Fulfill the Law,
                                        Anger,
                                        Lust,
                                        Divorce,
                                        Oaths,
                                        Retaliation,
                                        Love Your Enemies
                                    </Typography>
                                    <Typography className="Type">gospels</Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }

}

export default BibleFlashcards;