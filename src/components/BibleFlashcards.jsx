import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";
import Grid from 'material-ui/Grid';

import Card, { CardActions, CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
    card: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        marginBottom: 16,
        fontSize: 14,
        color: theme.palette.text.secondary,
    },
    pos: {
        marginBottom: 12,
        color: theme.palette.text.secondary,
    },
});

@observer
class BibleFlashcards extends React.Component {

    render() {
        return (
            <div>
                <div style={{ padding: 20 }}>
                    <Grid container spacing={40} alignItems="center" direction="column" justify="flex-start" >
                        <Grid item xs={6}>
                            <Card className="Card">
                                <CardContent>
                                    <Typography type="headline" component="h2">Matthew 5</Typography>
                                    <Typography className="Type">gospels</Typography>
                                </CardContent>
                            </Card>
                            <div style={{ padding: 20 }}/>
                            <Card className="Card">
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