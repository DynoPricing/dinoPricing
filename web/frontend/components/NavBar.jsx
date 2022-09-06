import { TitleBar } from "@shopify/app-bridge-react";
import React from "react";

export function NavBar() {
	const primaryAction = { content: "Settings", url: "/Settings" };

	const secondaryActions = [
		{ content: "Dashboard", url: "/Dashboard", loading: false },
		{ content: "Tracked Products", url: "/TrackedProducts", loading: false },
	];

	return (
		<TitleBar
			title="DinoPricing"
			primaryAction={primaryAction}
			secondaryActions={secondaryActions}
		/>
	);
}
