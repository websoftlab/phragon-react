import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerLetterLIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerLetterLIcon = React.forwardRef<SVGSVGElement, TablerLetterLIconProps>(function TablerLetterLIcon(
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
			<path d="M7 4v16h10" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerLetterLIcon.displayName = "TablerLetterLIcon";
}
