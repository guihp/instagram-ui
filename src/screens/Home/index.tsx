import { StyleSheet, View, Image, Text, ScrollView } from 'react-native';
import { FlatList } from 'react-native';


import foto from "../../assets/foto.png"
import foto2 from "../../assets/foto2.png"
import foto3 from "../../assets/foto3.png"
import foto4 from "../../assets/foto4.png"
import image from "../../assets/image.png"
import Logo from "../../assets/logo.svg"
import Message from "../../assets/message.svg"
import Points from "../../assets/points.svg"
import Stroke from "../../assets/stroke.svg"
import BookMark from "../../assets/Bookmark.svg"
import Heart from "../../assets/Heart.svg"
import Comment from "../../assets/Comment.svg"
import Share from "../../assets/Share.svg"


const DATA = [
    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto,
    },

    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto2,
    },

    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto3,
    },

    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto4,
    },

    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto2,
    },

    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto3,
    },

    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto,
    },

    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto2,
    },

    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto3,
    },

    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto,
    },

    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto2,
    },

    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto,
    },

    {
        id: Math.random().toString(36).substring(2, 27),
        photoURL: foto3,
    },


];
    


export function Home() {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Logo />
            <View style={styles.headerOptions}>
                <Stroke />
                <Message />
            </View>
        </View>
        <ScrollView style={{width: "100%"}}>
        <View style={styles.stories}>
            <FlatList 
                horizontal={true}
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem={(item) => (
                    <View style={styles.storiesCard} key={item.item.id}>
                        <Image style={styles.storiesCardImage} source={item.item.photoURL} />
                    </View>
                )}
            />
        </View>

        <View style={styles.content}>
            <View style={styles.contentHeader}>
                <View style={styles.contentHeaderLeft}>
                    <Image style={styles.contentHeaderLeftImage} source ={foto} />
                    <Text style={styles.contentHeaderLeftImageText}>Izadora Carreiro</Text>
                </View>
                <Points />
            </View> 
            <View style={styles.contentImage} >
                <Image source={image} />
            </View>
            
            <View style={styles.contentFooter}>
                <View style={{
                width: "100%",
                flexDirection: "row", 
                justifyContent: "space-between"}}>
                    <View style={styles.contentFooterLefet}>
                        <Heart />
                        <Comment />
                        <Share />
                    </View>
                    <BookMark />
                </View>
                <View style={{
                    marginTop: 15,
                    gap: 10,
                    paddingLeft: 8,
                }}>
                    <Text style={{
                        color: "#fff",

                    }}>
                        cliscslab How IOT is changin the world?
                    </Text>
                    <Text style={{
                        color: "#fff",

                    }}>
                        View all 3 comments
                    </Text>
                    <Text style={{
                        color: "#fff",
                        fontSize: 10,
                    }}>
                        3 hours ago See Translation
                    </Text>
                </View>
            </View>
        </View>

                <View style={styles.content}>
            <View style={styles.contentHeader}>
                <View style={styles.contentHeaderLeft}>
                    <Image style={styles.contentHeaderLeftImage} source ={foto} />
                    <Text style={styles.contentHeaderLeftImageText}>Izadora Carreiro</Text>
                </View>
                <Points />
            </View> 
            <View style={styles.contentImage} >
                <Image source={image} />
            </View>
            
            <View style={styles.contentFooter}>
                <View style={{
                width: "100%",
                flexDirection: "row", 
                justifyContent: "space-between"}}>
                    <View style={styles.contentFooterLefet}>
                        <Heart />
                        <Comment />
                        <Share />
                    </View>
                    <BookMark />
                </View>
                <View style={{
                    marginTop: 15,
                    gap: 10,
                    paddingLeft: 8,
                }}>
                    <Text style={{
                        color: "#fff",

                    }}>
                        cliscslab How IOT is changin the world?
                    </Text>
                    <Text style={{
                        color: "#fff",

                    }}>
                        View all 3 comments
                    </Text>
                    <Text style={{
                        color: "#fff",
                        fontSize: 10,
                    }}>
                        3 hours ago See Translation
                    </Text>
                </View>
            </View>
        </View>     
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
  },
  header: {
    marginTop: 40,
    paddingHorizontal: 10,
    width: '100%',
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  },
  headerOptions: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
  stories: {
    height: 114,
    paddingLeft: 10,
    paddingVertical: 10, 
    alignContent: "center",
  },
  storiesCard: { 
    marginRight: 14,
  },
  storiesCardImage: {
    width: 64,
    height: 64,
    borderWidth: 2,
    borderColor: "#F7B55A",
    borderRadius: 50,
  },
  content: {
    
    width: "100%",
    marginBottom: 10,
  },
  contentHeader: {
    height: 52,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  contentHeaderLeft: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  contentHeaderLeftImage: {
    width: 30,
    height: 30,
  },
  contentHeaderLeftImageText: {
    color: "#fff",
  },
  contentImage: {
    width: "100%"
  },
  contentFooter: {
    paddingHorizontal: 10,
    marginTop: 10,
  },
  contentFooterLefet: {
    alignItems: "center",
    flexDirection: "row",
    gap: 10,
  },
});