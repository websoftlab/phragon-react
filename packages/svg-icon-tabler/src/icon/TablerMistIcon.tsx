import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMistIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMistIcon = React.forwardRef<SVGSVGElement, TablerMistIconProps>(function TablerMistIcon(props, ref) {
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
			<path d="M5 5h3m4 0h9" />
			<path d="M3 10h11m4 0h1" />
			<path d="M5 15h5m4 0h7" />
			<path d="M3 20h9m4 0h3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMistIcon.displayName = "TablerMistIcon";
}
