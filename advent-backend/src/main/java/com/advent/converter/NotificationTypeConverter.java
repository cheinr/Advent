package com.advent.converter;

import com.advent.utils.NotificationType;

import javax.persistence.AttributeConverter;

public class NotificationTypeConverter implements AttributeConverter<NotificationType, String> {

    @Override
    public String convertToDatabaseColumn(NotificationType value) {
        switch(value) {
            case GROUP:
                return "GROUP";
            case EVENT:
                return "EVENT";
            case MESSAGE:
                return "MESSAGE";
        }
        return null;
    }

    @Override
    public NotificationType convertToEntityAttribute(String value) {
        switch(value) {
            case "GROUP":
                return NotificationType.GROUP;
            case "EVENT":
                return NotificationType.EVENT;
            case "MESSAGE":
                return NotificationType.MESSAGE;
        }
        return null;
    }
}
