import type { Meta, StoryObj } from '@storybook/svelte';
import Avatar from './index.svelte';
const meta = {
	title: 'UI/Avatar',
	component: Avatar
} satisfies Meta<Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
	args: {
		src: 'static/nyatinte.png',
		alt: 'nyatinte'
	}
};
