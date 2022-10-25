package internal

import (
	"fmt"
	"log"
	"logger/rpc"
)

func FormatLogInput(in *logger.LogInput) string {
	return fmt.Sprintf("Message %v\nDate %v\nType %v\nInititiatedBy %v\nPersonId %v\nOther %v", in.GetMessage(), in.GetDate(),
		in.GetType(), in.GetInitiatedBy(), in.GetPersonId(), in.GetOther())
}

func ErrorHandle(err error) {
	if err != nil {
		log.Fatalln(err)
	}
}
