import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerShuffleIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerShuffleIcon = React.forwardRef<SVGSVGElement, TablerShuffleIconProps>(function TablerShuffleIcon(
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
			<path d="M16 3 L21 3 L21 8" />
			<path d="M4 20 L21 3" />
			<path d="M21 16 L21 21 L16 21" />
			<path d="M15 15 L21 21" />
			<path d="M4 4 L9 9" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerShuffleIcon.displayName = "TablerShuffleIcon";
}
