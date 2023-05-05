import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLoaderIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLoaderIcon = React.forwardRef<SVGSVGElement, TablerLoaderIconProps>(function TablerLoaderIcon(
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
			<path d="M12 2 L12 6" />
			<path d="M12 18 L12 22" />
			<path d="M4.93 4.93 L7.76 7.76" />
			<path d="M16.24 16.24 L19.07 19.07" />
			<path d="M2 12 L6 12" />
			<path d="M18 12 L22 12" />
			<path d="M4.93 19.07 L7.76 16.24" />
			<path d="M16.24 7.76 L19.07 4.93" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLoaderIcon.displayName = "TablerLoaderIcon";
}
