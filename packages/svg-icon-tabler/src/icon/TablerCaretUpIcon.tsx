import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerCaretUpIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerCaretUpIcon = React.forwardRef<SVGSVGElement, TablerCaretUpIconProps>(function TablerCaretUpIcon(
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
			<path d="M18 14l-6 -6l-6 6h12" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerCaretUpIcon.displayName = "TablerCaretUpIcon";
}
