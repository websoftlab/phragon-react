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
			<path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
			<path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWalletIcon.displayName = "TablerWalletIcon";
}
