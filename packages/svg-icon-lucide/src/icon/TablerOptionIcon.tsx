import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerOptionIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerOptionIcon = React.forwardRef<SVGSVGElement, TablerOptionIconProps>(function TablerOptionIcon(
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
			<path d="M3 3h6l6 18h6" />
			<path d="M14 3h7" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerOptionIcon.displayName = "TablerOptionIcon";
}
