import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWalletIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWalletIcon = React.forwardRef<SVGSVGElement, TablerWalletIconProps>(function TablerWalletIcon(
	props,
	ref
) {
	const { children, ...rest } = props;
	return (
		<SvgIcon
			stroke="currentColor"
			strokeWidth={2}
			strokeLinecap="round"
			strokeLinejoin="round"
			{...rest}
			ref={ref}
			size={24}
			icon={undefined}
			fill="none"
		>
			<path d="M20 12V8H6a2 2 0 0 1-2-2c0-1.1.9-2 2-2h12v4" />
			<path d="M4 6v12c0 1.1.9 2 2 2h14v-4" />
			<path d="M18 12a2 2 0 0 0-2 2c0 1.1.9 2 2 2h4v-4h-4z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWalletIcon.displayName = "TablerWalletIcon";
}
