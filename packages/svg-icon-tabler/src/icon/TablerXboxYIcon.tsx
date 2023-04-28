import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerXboxYIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerXboxYIcon = React.forwardRef<SVGSVGElement, TablerXboxYIconProps>(function TablerXboxYIcon(
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
			<path d="M12 21a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9a9 9 0 0 0 -9 9a9 9 0 0 0 9 9z" />
			<path d="M9 8l3 4" />
			<path d="M15 8l-2.988 3.984l-.012 4.016" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerXboxYIcon.displayName = "TablerXboxYIcon";
}
