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
			<path d="M12 6l0 -3" />
			<path d="M16.25 7.75l2.15 -2.15" />
			<path d="M18 12l3 0" />
			<path d="M16.25 16.25l2.15 2.15" />
			<path d="M12 18l0 3" />
			<path d="M7.75 16.25l-2.15 2.15" />
			<path d="M6 12l-3 0" />
			<path d="M7.75 7.75l-2.15 -2.15" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLoaderIcon.displayName = "TablerLoaderIcon";
}
