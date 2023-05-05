import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerSaveIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerSaveIcon = React.forwardRef<SVGSVGElement, TablerSaveIconProps>(function TablerSaveIcon(props, ref) {
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
			<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
			<path d="M17 21 L17 13 L7 13 L7 21" />
			<path d="M7 3 L7 8 L15 8" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerSaveIcon.displayName = "TablerSaveIcon";
}
