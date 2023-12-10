package Test2.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Test2.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;


/**
 * Entity implementation class for Entity: ПД
 */
@Entity(name = "IISTest2ПД")
@Table(schema = "public", name = "ПД")
public class PD {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "серия")
    private String серия;

    @Column(name = "номер")
    private String номер;

    @Column(name = "ID")
    private Integer id;

    @Column(name = "Имя")
    private String имя;


    public PD() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getсерия() {
      return серия;
    }

    public void setсерия(String серия) {
      this.серия = серия;
    }

    public String getномер() {
      return номер;
    }

    public void setномер(String номер) {
      this.номер = номер;
    }

    public Integer getID() {
      return id;
    }

    public void setID(Integer id) {
      this.id = id;
    }

    public String getИмя() {
      return имя;
    }

    public void setИмя(String имя) {
      this.имя = имя;
    }


}