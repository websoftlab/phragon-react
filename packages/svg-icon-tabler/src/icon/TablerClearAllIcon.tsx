import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClearAllIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClearAllIcon = React.forwardRef<SVGSVGElement, TablerClearAllIconProps>(function TablerClearAllIcon(
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
			<path d="M8 6h12" />
			<path d="M6 12h12" />
			<path d="M4 18h12" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerClearAllIcon.displayName = "TablerClearAllIcon";
}
