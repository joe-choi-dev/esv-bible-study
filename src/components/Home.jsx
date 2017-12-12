import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import AppBar from 'material-ui/AppBar';
import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import StarBorder from 'material-ui/svg-icons/toggle/star-border';
import RaisedButton from 'material-ui/RaisedButton';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        display: 'flex',
        flexWrap: 'nowrap',
        overflowX: 'auto',
        width: '100%'
    },
    titleStyle: {
        color: 'rgb(0, 188, 212)',
    },
    gif: {
        width: '200px',
        height: '200px'
    },
    gifList: {
        display: 'flex',
        textAlign: 'center',
        width: '100%'
    },
    gifCell: {
        width: '250px',
        height: '250px'
    }
};

const tilesData = [
    {
        img: 'src/images/praise.jpg',
        title: 'Praise',
        author: 'jill111',
    },
    {
        img: 'src/images/gift_exchange.jpg',
        title: 'Gift Exchange',
        author: 'jill111',
    },
    {
        img: 'src/images/braveheart.jpg',
        title: 'Braveheart',
        author: 'jill111',
    },
    {
        img: 'src/images/service.jpg',
        title: 'Gift Exchange',
        author: 'jill111',
    }
];

const GridListExampleSingleLine = () => (
    <div style={styles.root}>
        <GridList style={styles.gridList} cols={2.2}>
            {tilesData.map((tile) => (
                <GridTile
                    key={tile.img}
                    title={tile.title}
                    actionIcon={<IconButton><StarBorder color="rgb(0, 188, 212)" /></IconButton>}
                    titleStyle={styles.titleStyle}
                    titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
                >
                    <img src={tile.img} />
                </GridTile>
            ))}
        </GridList>
    </div>
);

@observer
class Home extends React.Component {

    render() {
        return (
            <div>
                <AppBar
                    title="ESV Bible Study"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <RaisedButton label="TEACH ME!" />
                <GridListExampleSingleLine/>

                <div style={styles.gifList}>
                    <div style={styles.gifCell}>
                        <img style={styles.gif} src="src/images/gifs/androidify-abe.gif"/>
                        <div>
                            <h4>ABE</h4>
                        </div>
                    </div>
                    <div style={styles.gifCell}>
                        <img style={styles.gif} src="src/images/gifs/androidify-jordan.gif"/>
                        <div>
                            <h4>JORDAN</h4>
                        </div>
                    </div>
                    <div style={styles.gifCell}>
                        <img style={styles.gif} src="src/images/gifs/androidify-joe.gif"/>
                        <div>
                            <h4>JOE</h4>
                        </div>
                    </div>
                    <div style={styles.gifCell}>
                        <img style={styles.gif} src="src/images/gifs/androidify-bj.gif"/>
                        <div>
                            <h4>BJ</h4>
                        </div>
                    </div>
                    <div style={styles.gifCell}>
                        <img style={styles.gif} src="src/images/gifs/androidify-sam.gif"/>
                        <div>
                            <h4>SAM</h4>
                        </div>
                    </div>
                    <div style={styles.gifCell}>
                        <img style={styles.gif} src="src/images/gifs/androidify-jon.gif"/>
                        <div>
                            <h4>JON</h4>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

export default Home;