import React from "react";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";

import Task from "./Task";

export const task = {
    id: '1',
    title: "Test Name",
    state: "TASK_INBOX",
    updatedAt: new Date(),
};

export const actions = {
    onPinTask: action("onPinTask"),
    onArchiveTask: action("onArchiveTask"),
};

storiesOf ("Task", module)
    .add ("default", () => <Task task={task} {...actions} />)
    .add('pinned', () => <Task task={{ ...task, state: 'TASK_PINNED' }} {...actions} />)
    .add('archived', () => <Task task={{ ...task, state: 'TASK_ARCHIVED' }} {...actions} />);