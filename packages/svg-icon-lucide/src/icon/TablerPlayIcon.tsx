import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPlayIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPlayIcon = React.forwardRef<SVGSVGElement, TablerPlayIconProps>(function TablerPlayIcon(props, ref) {
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
			<path d="M5 3 L19 12 L5 21 L5 3Z" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPlayIcon.displayName = "TablerPlayIcon";
}
