package es

import (
	"context"
	"github.com/olivere/elastic/v7"
	"github.com/sirupsen/logrus"
	"time"
)

type RuntimeToEsHook struct {
	client *elastic.Client
}

func (esHook *RuntimeToEsHook) Levels() []logrus.Level {
	return logrus.AllLevels
}

func (esHook *RuntimeToEsHook) Fire(entry *logrus.Entry) error {
	ctx, cancel := context.WithTimeout(context.TODO(), 5*time.Second)
	defer cancel()
	SyncIndex(JoinIndexName("gomessage-runtime"))
	_, err := esHook.client.Index().Index(JoinIndexName("gomessage-runtime")).BodyJson(*CreateRecord(entry)).Do(ctx)
	return err
}

func NewRuntimeToEsHook() *RuntimeToEsHook {
	return &RuntimeToEsHook{
		client: GetEsClient(),
	}
}
