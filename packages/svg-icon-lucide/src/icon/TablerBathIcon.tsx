import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerBathIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerBathIcon = React.forwardRef<SVGSVGElement, TablerBathIconProps>(function TablerBathIcon(props, ref) {
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
			<path d="M9 6 6.5 3.5a1.5 1.5 0 0 0-1-.5C4.683 3 4 3.683 4 4.5V17a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5" />
			<path d="M10 5 L8 7" />
			<path d="M2 12 L22 12" />
			<path d="M7 19 L7 21" />
			<path d="M17 19 L17 21" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerBathIcon.displayName = "TablerBathIcon";
}
