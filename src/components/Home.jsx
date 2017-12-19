import React, { Component } from "react";
import { observable, action } from "mobx";
import { observer } from "mobx-react";

import {GridList, GridTile} from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import Badge from 'material-ui/Badge';

const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    xmas: {
        margin: '0 auto'
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
        width: '180px',
        height: '180px'
    },
    gifList: {
        margin: '0 auto',
        paddingTop: '40px',
        display: 'flex',
        textAlign: 'center',
        width: '100%'
    },
    gifCell: {
        width: '220px',
        height: 'auto'
    },
    gifFont: {
        fontFamily: 'roboto,sans-serif',
        color: '#9E9E9E'
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
                <h1>Bros: 25</h1>
                <h1>Sisters: 24</h1>

                {/*<GridListExampleSingleLine/>*/}
                {/*<div>*/}
                    {/*<div style={styles.xmas}>*/}
                        {/*<img style={styles.gif} src="src/images/xmas.png"/>*/}
                        {/*<div>*/}
                            {/*<h1 style={styles.gifFont}>Merry Christmas!</h1>*/}
                        {/*</div>*/}
                    {/*</div>*/}
                {/*</div>*/}

                {/* BROS */}
                <div style={styles.gifList}>
                    <div style={styles.gifCell}>
                        <Badge badgeContent={5} primary={true}>
                            <img style={styles.gif} src="/public/images/androidify/androidify-1513185782106.png"/>
                        </Badge>
                        <div>
                            <h4 style={styles.gifFont}>abe</h4>
                        </div>
                    </div>
                    <div style={styles.gifCell}>
                        <Badge badgeContent={15} primary={true}>
                            <img style={styles.gif} src="public/images/gifs/androidify-jordan.gif"/>
                        </Badge>
                        <div>
                            <h4 style={styles.gifFont}>jordan</h4>
                        </div>
                    </div>
                    <div style={styles.gifCell}>
                        <Badge badgeContent={3} primary={true}>
                            <img style={styles.gif} src="public/images/gifs/androidify-joe.gif"/>
                        </Badge>
                        <div>
                            <h4 style={styles.gifFont}>joe</h4>
                        </div>
                    </div>
                    <div style={styles.gifCell}>
                        <Badge badgeContent={2} primary={true}>
                            <img style={styles.gif} src="public/images/gifs/androidify-bj.gif"/>
                        </Badge>
                        <div>
                            <h4 style={styles.gifFont}>bj</h4>
                        </div>
                    </div>
                    <div style={styles.gifCell}>
                        <Badge badgeContent={5} primary={true}>
                            <img style={styles.gif} src="public/images/gifs/androidify-sam.gif"/>
                        </Badge>
                        <div>
                            <h4 style={styles.gifFont}>sam</h4>
                        </div>
                    </div>
                    <div style={styles.gifCell}>
                        <Badge badgeContent={20} primary={true}>
                            <img style={styles.gif} src="public/images/gifs/androidify-jon.gif"/>
                        </Badge>
                        <div>
                            <h4 style={styles.gifFont}>jon</h4>
                        </div>
                    </div>
                </div>

                {/* SISTERS */}
                <div style={styles.gifList}>
                    <div style={styles.gifCell}>
                        <Badge badgeContent={4} secondary={true}>
                            <img style={styles.gif} src="public/images/gifs/androidify-ashley.gif"/>
                        </Badge>
                        <div>
                            <h4 style={styles.gifFont}>ashley</h4>
                        </div>
                    </div>
                    <div style={styles.gifCell}>
                        <Badge badgeContent={3} secondary={true}>
                            <img style={styles.gif} src="public/images/gifs/androidify-michelle.gif"/>
                        </Badge>
                        <div>
                            <h4 style={styles.gifFont}>michelle</h4>
                        </div>
                    </div>
                    <div style={styles.gifCell}>
                        <Badge badgeContent={2} secondary={true}>
                            <img style={styles.gif} src="public/images/gifs/androidify-christine.gif"/>
                        </Badge>
                        <div>
                            <h4 style={styles.gifFont}>christine</h4>
                        </div>
                    </div>
                    <div style={styles.gifCell}>
                        <Badge badgeContent={3} secondary={true}>
                            <img style={styles.gif} src="public/images/gifs/androidify-emily.gif"/>
                        </Badge>
                        <div>
                            <h4 style={styles.gifFont}>emily</h4>
                        </div>
                    </div>
                    <div style={styles.gifCell}>
                        <Badge badgeContent={20} secondary={true}>
                            <img style={styles.gif} src="public/images/gifs/androidify-carol.gif"/>
                        </Badge>
                        <div>
                            <h4 style={styles.gifFont}>carol</h4>
                        </div>
                    </div>
                </div>

            </div>
        );
    }

}

export default Home;