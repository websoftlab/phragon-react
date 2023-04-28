import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerClickIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerClickIcon = React.forwardRef<SVGSVGElement, TablerClickIconProps>(function TablerClickIcon(
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
			<path d="M3 12l3 0" />
			<path d="M12 3l0 3" />
			<path d="M7.8 7.8l-2.2 -2.2" />
			<path d="M16.2 7.8l2.2 -2.2" />
			<path d="M7.8 16.2l-2.2 2.2" />
			<path d="M12 12l9 3l-4 2l-2 4l-3 -9" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerClickIcon.displayName = "TablerClickIcon";
}
