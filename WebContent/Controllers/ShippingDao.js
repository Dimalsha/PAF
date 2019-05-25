package com.hari.dao;

import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;

import com.hari.model.Post;
import com.hari.model.Shipping;

public class ShippingDao {
	private JdbcTemplate jdbcTemplate;
	@Autowired
	private SessionFactory session;




	public void setJdbcTemplate(JdbcTemplate jdbcTemplate) {
		this.jdbcTemplate = jdbcTemplate;
	}

	public int registerShipping(Shipping s){
		try {
			String query="INSERT INTO `ship`(`shippic`, `shipname`, `shipaddress`, `shipnum`) VALUES ('"+s.getShippic()+"' , '"+s.getShipname()+"','"+s.getShipaddress()+"', '"+s.getShipnum()+"')";
			return jdbcTemplate.update(query);
		}
		catch(Exception e) {
			System.out.println("Error: " + e);
			return -99;
		}
	}
	
	public Shipping getShipping(int shipid) {
		Shipping ship;
		try {
			String shippic = (String) this.jdbcTemplate.queryForObject("select shippic from `ship` where shipid = '"+shipid+"'", String.class);
			String shipname = (String) this.jdbcTemplate.queryForObject("select shipname from `ship` where shipid = '"+shipid+"'", String.class);
			String shipaddress = (String) this.jdbcTemplate.queryForObject("select shipaddress from `ship` where shipid = '"+shipid+"'", String.class);
			int shipnum = Integer.parseInt((String) this.jdbcTemplate.queryForObject("select shipnum from `ship` where shipid = '"+shipid+"'", String.class));
			
			
			ship = new Shipping(shipid, shippic,  shipname, shipaddress, shipnum);
		}
		catch(Exception e) {
			System.out.println("Error: " + e);
			ship = null;
		}
		return ship;
	}
	private int shipid;
	private String shipname;
    private String shipaddress;
	private int shipnum;
	private String shippic;
	
	public Shipping() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Shipping(int shipid, String shippic, String shipname, String shipaddress, int shipnum) {
		this.shipid=shipid;
		this.shippic=shippic;
		this.shipname=shipname;
		this.shipaddress=shipaddress;
		this.shipnum=shipnum;
		
		
		
	}
	public int getShipid() {
		return shipid;
	}
	public void setShipid(int shipid) {
		this.shipid = shipid;
	}
	public String getShipname() {
		return shipname;
	}
	public void setShipname(String shipname) {
		this.shipname = shipname;
	}
	public String getShipaddress() {
		return shipaddress;
	}
	public void setShipaddress(String shipaddress) {
		this.shipaddress = shipaddress;
	}
	public int getShipnum() {
		return shipnum;
	}
	public void setShipnum(int shipnum) {
		this.shipnum = shipnum;
	}
	public String getShippic() {
		return shippic;
	}
	public void setShippic(String shippic) {
		this.shippic = shippic;
	}
	
	
	
}
private int shipid;
private String shipname;
private String shipaddress;
private int shipnum;
private String shippic;

public Shipping() {
	super();
	// TODO Auto-generated constructor stub
}
public Shipping(int shipid, String shippic, String shipname, String shipaddress, int shipnum) {
	this.shipid=shipid;
	this.shippic=shippic;
	this.shipname=shipname;
	this.shipaddress=shipaddress;
	this.shipnum=shipnum;
	
	
	
}
public int getShipid() {
	return shipid;
}
public void setShipid(int shipid) {
	this.shipid = shipid;
}
public String getShipname() {
	return shipname;
}
public void setShipname(String shipname) {
	this.shipname = shipname;
}
public String getShipaddress() {
	return shipaddress;
}
public void setShipaddress(String shipaddress) {
	this.shipaddress = shipaddress;
}
public int getShipnum() {
	return shipnum;
}
public void setShipnum(int shipnum) {
	this.shipnum = shipnum;
}
public String getShippic() {
	return shippic;
}
public void setShippic(String shippic) {
	this.shippic = shippic;
}



}
private int shipid;
private String shipname;
private String shipaddress;
private int shipnum;
private String shippic;

public Shipping() {
	super();
	// TODO Auto-generated constructor stub
}
public Shipping(int shipid, String shippic, String shipname, String shipaddress, int shipnum) {
	this.shipid=shipid;
	this.shippic=shippic;
	this.shipname=shipname;
	this.shipaddress=shipaddress;
	this.shipnum=shipnum;
	
	
	
}
public int getShipid() {
	return shipid;
}
public void setShipid(int shipid) {
	this.shipid = shipid;
}
public String getShipname() {
	return shipname;
}
public void setShipname(String shipname) {
	this.shipname = shipname;
}
public String getShipaddress() {
	return shipaddress;
}
public void setShipaddress(String shipaddress) {
	this.shipaddress = shipaddress;
}
public int getShipnum() {
	return shipnum;
}
public void setShipnum(int shipnum) {
	this.shipnum = shipnum;
}
public String getShippic() {
	return shippic;
}
public void setShippic(String shippic) {
	this.shippic = shippic;
}



}

	public int updateShipping(Shipping s){
		
		try {
			//UPDATE `order` set paymenttype=`?`,quantity=`?` WHERE orderid='"+orderid+"';
			String query="UPDATE `ship` SET `shipaddress`= '"+s.getShipaddress()+"' ,`shipnum`= '"+s.getShipnum()+"'";
			return jdbcTemplate.update(query);
		}
		catch(Exception z) {
			System.out.println(z);
			return -99;
		}
	}

	public int deactivate(int shipid){
		try {
			String query="Delete from `ship` where shipid='"+shipid+"'";
			return jdbcTemplate.update(query);
		}
		catch(Exception z) {
			System.out.println(z);
			return -99;
		}
	}
	

}
