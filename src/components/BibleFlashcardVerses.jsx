import React, { Component } from "react";
import { observable, action } from "mobx";
import { inject, observer } from "mobx-react";
import Grid from 'material-ui/Grid';
import { withStyles } from 'material-ui/styles';
import IconButton from 'material-ui/IconButton';
import KeyboardArrowRight from 'material-ui-icons/KeyboardArrowRight';
import KeyboardArrowLeft from 'material-ui-icons/KeyboardArrowLeft';
import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    card: {
        minWidth: "100%"
    },
});

@inject("globalStore") @observer
class BibleFlashcards extends React.Component {

    constructor(props) {
        super(props);
        this.toggleCard = this.toggleCard.bind(this);
        this.closeCard = this.closeCard.bind(this);
        this.nextCard = this.nextCard.bind(this);
        this.props.globalStore.flashCardsStore.createKeyVersesArray(this.props.globalStore.flashCardsStore.bookTitle);
        this.closeCard();

    }

    nextCard() {
        this.props.globalStore.flashCardsStore.nextVerse();
        this.closeCard();
    }

    toggleCard() {
        this.props.globalStore.flashCardsStore.toggleCard();
    }

    closeCard() {
        this.props.globalStore.flashCardsStore.closeCard();
    }

    render() {
        this.props.globalStore.esv.getVerses(this.props.globalStore.flashCardsStore.bookTitle
            +this.props.globalStore.flashCardsStore.currVerse);
        if (this.props.globalStore.flashCardsStore.currVerse) {
            return (
                <div style={{ padding: 20 }}>
                    <Grid container spacing={40} alignItems="center" direction="column" justify="flex-start" >
                        <Grid item xs={10} md={6} style={{width: "100%"}}>
                            <Card className="Card" onClick={this.toggleCard}>
                                <CardContent>
                                    <Typography type="headline" component="h2">{this.props.globalStore.flashCardsStore.bookTitle
                                    + " "
                                    + this.props.globalStore.flashCardsStore.currVerse}</Typography>
                                    <Typography className="Type">gospels</Typography>
                                </CardContent>
                            </Card>
                            <div style={{ padding: 10 }}/>
                            <Card className="Card" onClick={this.closeCard} style={{display: this.props.globalStore.flashCardsStore.isDefVisible}}>
                                <CardContent>
                                    <Typography component="p">
                                        {this.props.globalStore.esv.verses}
                                    </Typography>
                                </CardContent>
                            </Card>
                            <div style={{ padding: 10 }}/>
                            <div style={{display: "table", margin: "0 auto"}}>
                                <IconButton color="contrast">
                                    <KeyboardArrowLeft />
                                </IconButton>
                                <IconButton
                                    onClick={this.nextCard}
                                    color="contrast">
                                    <KeyboardArrowRight />
                                </IconButton>
                            </div>
                        </Grid>
                    </Grid>
                </div>
            );
        } else {
            return (
                <div style={{ padding: 20 }}>
                    <h1>
                        DONE
                    </h1>
                </div>
            );
        }
    }

}

export default withStyles(styles)(BibleFlashcards);