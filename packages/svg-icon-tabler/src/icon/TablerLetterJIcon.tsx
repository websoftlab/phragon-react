import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLetterJIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLetterJIcon = React.forwardRef<SVGSVGElement, TablerLetterJIconProps>(function TablerLetterJIcon(
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
			<path d="M17 4v12a4 4 0 0 1 -4 4h-2a4 4 0 0 1 -4 -4" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLetterJIcon.displayName = "TablerLetterJIcon";
}
