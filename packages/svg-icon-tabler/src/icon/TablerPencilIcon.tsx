import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerPencilIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerPencilIcon = React.forwardRef<SVGSVGElement, TablerPencilIconProps>(function TablerPencilIcon(
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
			<path d="M4 20h4l10.5 -10.5a1.5 1.5 0 0 0 -4 -4l-10.5 10.5v4" />
			<path d="M13.5 6.5l4 4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerPencilIcon.displayName = "TablerPencilIcon";
}
