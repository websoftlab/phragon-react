import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerWritingIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerWritingIcon = React.forwardRef<SVGSVGElement, TablerWritingIconProps>(function TablerWritingIcon(
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
			<path d="M20 17v-12c0 -1.121 -.879 -2 -2 -2s-2 .879 -2 2v12l2 2l2 -2z" />
			<path d="M16 7h4" />
			<path d="M18 19h-13a2 2 0 1 1 0 -4h4a2 2 0 1 0 0 -4h-3" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerWritingIcon.displayName = "TablerWritingIcon";
}
