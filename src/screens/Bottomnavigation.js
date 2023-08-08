import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";

const Bottomnavigation = () => {
    return (
        <View style={{ flex: 0.1, justifyContent: "center", alignItems: "center" }}>
            <View style={{ backgroundColor: "blue", height: 70, width: "100%", flexDirection: "row", justifyContent: "space-evenly", alignItems: "center" }}>
                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: "33%", height: 100 }}>
                    <Image source={require("../assests/home.png")} style={{ width: 30, height: 30 }} />
                    <Text style={{color:"white"}}>Home</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: "33%", height: 100 }}>
                    <View style={{width:40, height:40, backgroundColor:"black", borderRadius:20,justifyContent:"center", alignItems:"center"}}>
                    <Image source={require("../assests/add.png")} style={{ width: 20, height: 20, tintColor:"white" }} />
                    </View>
                    
                </TouchableOpacity>
                <TouchableOpacity style={{ justifyContent: "center", alignItems: "center", width: "33%", height: 100 }}>
                    <Image source={require("../assests/search.png")} style={{ width: 30, height: 30 }} />
                    <Text style={{color:"white"}}>Explore</Text>
                </TouchableOpacity>

            </View>






        </View>
    );
};
export default Bottomnavigation;