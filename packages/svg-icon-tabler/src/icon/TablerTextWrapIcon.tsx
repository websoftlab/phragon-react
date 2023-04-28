import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTextWrapIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTextWrapIcon = React.forwardRef<SVGSVGElement, TablerTextWrapIconProps>(function TablerTextWrapIcon(
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
			<path d="M4 6l16 0" />
			<path d="M4 18l5 0" />
			<path d="M4 12h13a3 3 0 0 1 0 6h-4l2 -2m0 4l-2 -2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTextWrapIcon.displayName = "TablerTextWrapIcon";
}
