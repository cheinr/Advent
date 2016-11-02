package com.advent.converter;

import javax.persistence.AttributeConverter;
import javax.persistence.Converter;
import java.util.Objects;

@Converter
public class BooleanConverter implements AttributeConverter<Boolean, Integer> {

    @Override
    public Integer convertToDatabaseColumn(Boolean value) {
        return Boolean.TRUE.equals(value) ? 1 : 0;
    }

    @Override
    public Boolean convertToEntityAttribute(Integer value) {
        return Objects.equals(value, 1);
    }
}
