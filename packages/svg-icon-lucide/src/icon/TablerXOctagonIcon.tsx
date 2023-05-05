import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerXOctagonIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerXOctagonIcon = React.forwardRef<SVGSVGElement, TablerXOctagonIconProps>(function TablerXOctagonIcon(
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
			<path d="M7.86 2 L16.14 2 L22 7.86 L22 16.14 L16.14 22 L7.86 22 L2 16.14 L2 7.86 L7.86 2Z" />
			<path d="M15 9 L9 15" />
			<path d="M9 9 L15 15" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerXOctagonIcon.displayName = "TablerXOctagonIcon";
}
