import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRulerIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRulerIcon = React.forwardRef<SVGSVGElement, TablerRulerIconProps>(function TablerRulerIcon(
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
			<path d="M21.3 8.7 8.7 21.3c-1 1-2.5 1-3.4 0l-2.6-2.6c-1-1-1-2.5 0-3.4L15.3 2.7c1-1 2.5-1 3.4 0l2.6 2.6c1 1 1 2.5 0 3.4Z" />
			<path d="m7.5 10.5 2 2" />
			<path d="m10.5 7.5 2 2" />
			<path d="m13.5 4.5 2 2" />
			<path d="m4.5 13.5 2 2" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerRulerIcon.displayName = "TablerRulerIcon";
}
