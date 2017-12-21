import React, { Component } from "react";
import { observable, action } from "mobx";
import { inject, observer } from "mobx-react";
import Grid from 'material-ui/Grid';

import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    card: {
        minWidth: 275,
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
});

@inject("globalStore") @observer
class BibleBooks extends React.Component {

    constructor(props) {
        super(props);
        // this.toggleCard = this.toggleCard.bind(this);
    }

    // handleClick(bookTitle) {
    //     this.props.globalStore.flashCardsStore.setBook(bookTitle);
    //     this.props.history.push('/flashcards')
    // }

    render() {
        return (
            <div>
                <div style={{ padding: 20 }}>
                    <Grid container spacing={40} alignItems="center" direction="row" justify="center" >
                        <Grid item xs={6}>
                            <Card className="Card">
                                <CardContent>
                                    <Typography type="headline" component="h2">Matthew</Typography>
                                    <Typography className="Type">gospels</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button dense onClick={() => {
                                        this.props.globalStore.flashCardsStore.setBook("Matthew");
                                        this.props.history.push('/flashcards')}}>Study Chapter Headings</Button>
                                    <Button dense>Study Key Verses</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card className="Card">
                                <CardContent>
                                    <Typography type="headline" component="h2">Mark</Typography>
                                    <Typography className="Type">gospels</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button dense onClick={() => {
                                        this.props.globalStore.flashCardsStore.setBook("Mark");
                                        this.props.history.push('/flashcards')}}>Study Chapter Headings</Button>
                                    <Button dense>Study Key Verses</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card className="Card">
                                <CardContent>
                                    <Typography type="headline" component="h2">Luke</Typography>
                                    <Typography className="Type">gospels</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button dense onClick={() => {
                                        this.props.globalStore.flashCardsStore.setBook("Luke");
                                        this.props.history.push('/flashcards')}}>Study Chapter Headings</Button>
                                    <Button dense>Study Key Verses</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card className="Card">
                                <CardContent>
                                    <Typography type="headline" component="h2">John</Typography>
                                    <Typography className="Type">gospels</Typography>
                                </CardContent>
                                <CardActions>
                                    <Button dense onClick={() => {
                                        this.props.globalStore.flashCardsStore.setBook("John");
                                        this.props.history.push('/flashcards')}}>Study Chapter Headings</Button>
                                    <Button dense>Study Key Verses</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    </Grid>
                </div>
            </div>
        );
    }

}

export default BibleBooks;