package Daniyal.SpringBootRest.entity;

import java.util.Date;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;

@Entity
public class Property {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String address;
    private String city;
    private String state;
    private String zipCode;
    private String propertyType;
    private Double price;
    private Integer bedrooms;
    private Integer bathrooms;
    private Double area;
    private String status;
    private Date listedDate;

    public Property() {
        super();
    }

    public Property(Integer id, String address, String city, String state, String zipCode, String propertyType, Double price, Integer bedrooms, Integer bathrooms, Double area, String status, Date listedDate) {
        super();
        this.id = id;
        this.address = address;
        this.city = city;
        this.state = state;
        this.zipCode = zipCode;
        this.propertyType = propertyType;
        this.price = price;
        this.bedrooms = bedrooms;
        this.bathrooms = bathrooms;
        this.area = area;
        this.status = status;
        this.listedDate = listedDate;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public String getZipCode() {
        return zipCode;
    }

    public void setZipCode(String zipCode) {
        this.zipCode = zipCode;
    }

    public String getPropertyType() {
        return propertyType;
    }

    public void setPropertyType(String propertyType) {
        this.propertyType = propertyType;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public Integer getBedrooms() {
        return bedrooms;
    }

    public void setBedrooms(Integer bedrooms) {
        this.bedrooms = bedrooms;
    }

    public Integer getBathrooms() {
        return bathrooms;
    }

    public void setBathrooms(Integer bathrooms) {
        this.bathrooms = bathrooms;
    }

    public Double getArea() {
        return area;
    }

    public void setArea(Double area) {
        this.area = area;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public Date getListedDate() {
        return listedDate;
    }

    public void setListedDate(Date listedDate) {
        this.listedDate = listedDate;
    }

    @Override
    public String toString() {
        return String.format("Property [id=%s, address=%s, city=%s, state=%s, zipCode=%s, propertyType=%s, price=%s, bedrooms=%s, bathrooms=%s, area=%s, status=%s, listedDate=%s]",
                id, address, city, state, zipCode, propertyType, price, bedrooms, bathrooms, area, status, listedDate);
    }
}
