import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerKeyIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerKeyIcon = React.forwardRef<SVGSVGElement, TablerKeyIconProps>(function TablerKeyIcon(props, ref) {
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
			<path d="M13 15.5 A5.5 5.5 0 0 1 7.5 21 A5.5 5.5 0 0 1 2 15.5 A5.5 5.5 0 0 1 13 15.5" />
			<path d="m21 2-9.6 9.6" />
			<path d="m15.5 7.5 3 3L22 7l-3-3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerKeyIcon.displayName = "TablerKeyIcon";
}
