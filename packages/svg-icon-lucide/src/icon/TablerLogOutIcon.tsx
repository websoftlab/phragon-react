import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLogOutIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLogOutIcon = React.forwardRef<SVGSVGElement, TablerLogOutIconProps>(function TablerLogOutIcon(
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
			<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
			<path d="M16 17 L21 12 L16 7" />
			<path d="M21 12 L9 12" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLogOutIcon.displayName = "TablerLogOutIcon";
}
