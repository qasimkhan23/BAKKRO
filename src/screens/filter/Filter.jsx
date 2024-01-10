import React, { useEffect, useState } from "react";
import {
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  ImageBackground,
} from "react-native";
import {
  Minus,
  Plus,
  ActiveRadio,
  InactiveRadio,
} from "../../../assets/svgs/svg";
import Header from "../../components/header/Header";
import styles from "./Styles";
import PropertyCard from "../../components/propertyCard/PropertyCard";
import DropDownPicker from "react-native-dropdown-picker";

const FilterScreen = ({ searchCallback, toggleModal }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [radioButtonValue, setRadioButtonValue] = useState("yes");

  const [rooms, setRooms] = useState(3);

  const [adults, setAdults] = useState(3);
  const [children, setChildrens] = useState(0);

  const [open, setOpen] = useState(false);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    { label: "Purchase", value: "Purchase" },
    { label: "Location", value: "Location" },
  ]);

  const [openProperty, setOpenProperty] = useState(false);
  const [propertyValue, setPropertyValue] = useState(null);
  const [propertyItems, setPropertyItem] = useState([
    { label: "Appartment", value: "Appartment" },
    { label: "Villa", value: "Villa" },
  ]);
  const [activeWorkshop, setActiveWorkshop] = useState(2);
  const [activeRoom, setActiveRoom] = useState(1);

  const noOfWorkshops = [1, 2, 3, 4, "5+"];
  const [tagsData, setTagsData] = useState([
    {
      title: "Abobo",
      status: false,
    },
    {
      title: "Adjamé",
      status: true,
    },
    {
      title: "Bingerville",
      status: false,
    },
    {
      title: "Anyama",
      status: false,
    },
    {
      title: "Attécoubé",
      status: false,
    },
    {
      title: "Koumassi",
      status: false,
    },
    {
      title: "Treichville",
      status: false,
    },
    {
      title: "Prt bouët",
      status: false,
    },
    {
      title: "Cocody",
      status: false,
    },
    {
      title: "Marcory",
      status: false,
    },
    {
      title: "Songon",
      status: false,
    },
    {
      title: "Yopougon",
      status: false,
    },
    {
      title: "Plateau",
      status: false,
    },
  ]);

  const handleTagClck = (index) => {
    let temp = [...tagsData];

    temp[index].status = !temp[index].status;
    setTagsData(temp);
  };

  return (
    <ScrollView
      style={styles.bodyContainer}
      showsVerticalScrollIndicator={false}
    >
      <Text style={styles.purchaseText}>Purchase or Location</Text>
      <DropDownPicker
        listMode="SCROLLVIEW"
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        placeholder={"Purchase"}
        zIndex={5000}
        style={styles.dropdownContainer}
        textStyle={styles.dropdownText}
        dropDownContainerStyle={styles.dropdownDataContainer}
      />
      <Text style={styles.purchaseText}>Property Type</Text>
      <DropDownPicker
        listMode="SCROLLVIEW"
        open={openProperty}
        value={propertyValue}
        items={propertyItems}
        setOpen={setOpenProperty}
        setValue={setPropertyValue}
        setItems={setPropertyItem}
        placeholder={"Appartment"}
        zIndex={4000}
        style={styles.dropdownContainer}
        textStyle={styles.dropdownText}
        dropDownContainerStyle={styles.dropdownDataContainer}
      />
      {/* zones container view */}
      <View style={styles.zonesContainer}>
        <Text styles={styles.zoneTitle}>Geographical Zones</Text>

        <View style={styles.zoneTagContainer}>
          {tagsData.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                item.status == false ? styles.inactiveTag : styles.activeTag,
              ]}
              onPress={() => handleTagClck(index)}
            >
              <Text
                style={
                  item.status == false ? styles.tagText : styles.activeTagText
                }
              >
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.moreZones}>
          <TouchableOpacity>
            <Text style={styles.moreZonesText}>View more zones</Text>
          </TouchableOpacity>
        </View>
      </View>
      {/* zones container view  ends here*/}
      <View style={styles.surfaceAreaContainer}>
        <Text style={styles.minimumArea}>Minimum Surface Area (in m²) </Text>
        <View style={styles.minimumAreaInput}>
          <TextInput
            style={styles.textInput}
            placeholder="Surface Area"
            placeholderTextColor={"#000"}
          />
        </View>
      </View>
      <View style={styles.surfaceAreaContainer}>
        <Text style={styles.maximumArea}>Maximum Surface Area (in m²) </Text>
        <View style={styles.maximumAreaInput}>
          <TextInput
            style={styles.textInput}
            placeholder="Surface Area"
            placeholderTextColor={"#000"}
          />
        </View>
      </View>
      <View style={styles.workshopContainer}>
        <Text style={styles.workshopText}>Number of Workshop</Text>
        <View style={styles.workshopTagContainer}>
          {noOfWorkshops.map((item, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => setActiveWorkshop(i)}
              style={
                activeWorkshop !== i
                  ? styles.inactiveWorkshopTag
                  : styles.activeWorkshopTag
              }
            >
              <Text
                style={
                  activeWorkshop !== i
                    ? styles.inctiveTagText
                    : styles.activeWorkshopTagText
                }
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.workshopContainer}>
        <Text style={styles.workshopText}>Number of Rooms</Text>
        <View style={styles.workshopTagContainer}>
          {noOfWorkshops.map((item, i) => (
            <TouchableOpacity
              key={i}
              onPress={() => setActiveRoom(i)}
              style={
                activeRoom !== i
                  ? styles.inactiveWorkshopTag
                  : styles.activeWorkshopTag
              }
            >
              <Text
                style={
                  activeRoom !== i
                    ? styles.inctiveTagText
                    : styles.activeWorkshopTagText
                }
              >
                {item}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
      <View style={styles.surfaceAreaContainer}>
        <Text style={styles.minimumArea}>Minimum Budget (in CFA Franc) </Text>
        <View style={styles.minimumAreaInput}>
          <TextInput
            style={styles.textInput}
            placeholder="Budget"
            placeholderTextColor={"#000"}
          />
        </View>
      </View>
      <View style={styles.surfaceAreaContainer}>
        <Text style={styles.maximumArea}>Maximum Budget (in CFA Franc) </Text>
        <View style={styles.maximumAreaInput}>
          <TextInput
            style={styles.textInput}
            placeholder="Budget"
            placeholderTextColor={"#000"}
          />
        </View>
      </View>
      <View style={styles.videoOptionsContainer}>
        <Text style={styles.videoText}>Do You Want 3D Video</Text>
        <View style={{ flexDirection: "row", marginTop: 18 }}>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <TouchableOpacity onPress={() => setRadioButtonValue("yes")}>
              {radioButtonValue == "yes" ? <ActiveRadio /> : <InactiveRadio />}
            </TouchableOpacity>
            <Text style={{ marginLeft: radioButtonValue == "yes" ? 0 : 4 }}>
              Yes
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              marginLeft: 10,
            }}
          >
            <TouchableOpacity onPress={() => setRadioButtonValue("no")}>
              {radioButtonValue == "no" ? <ActiveRadio /> : <InactiveRadio />}
            </TouchableOpacity>
            <Text style={{ marginLeft: radioButtonValue == "no" ? 0 : 4 }}>
              No
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            searchCallback(true);
            toggleModal();
          }}
        >
          <Text style={styles.btnText}>Search</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default FilterScreen;
