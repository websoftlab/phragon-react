import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerTieIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerTieIcon = React.forwardRef<SVGSVGElement, TablerTieIconProps>(function TablerTieIcon(props, ref) {
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
			<path d="M12 22l4 -4l-2.5 -11l.993 -2.649a1 1 0 0 0 -.936 -1.351h-3.114a1 1 0 0 0 -.936 1.351l.993 2.649l-2.5 11l4 4z" />
			<path d="M10.5 7h3l5 5.5" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerTieIcon.displayName = "TablerTieIcon";
}
