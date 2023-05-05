import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCodepenIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCodepenIcon = React.forwardRef<SVGSVGElement, TablerCodepenIconProps>(function TablerCodepenIcon(
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
			<path d="M12 2 L22 8.5 L22 15.5 L12 22 L2 15.5 L2 8.5 L12 2Z" />
			<path d="M12 22 L12 15.5" />
			<path d="M22 8.5 L12 15.5 L2 8.5" />
			<path d="M2 15.5 L12 8.5 L22 15.5" />
			<path d="M12 2 L12 8.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCodepenIcon.displayName = "TablerCodepenIcon";
}
