import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerMessageCircleExclamationIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerMessageCircleExclamationIcon = React.forwardRef<
	SVGSVGElement,
	TablerMessageCircleExclamationIconProps
>(function TablerMessageCircleExclamationIcon(props, ref) {
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
			<path d="M15.02 19.52c-2.34 .736 -5 .606 -7.32 -.52l-4.7 1l1.3 -3.9c-2.324 -3.437 -1.426 -7.872 2.1 -10.374c3.526 -2.501 8.59 -2.296 11.845 .48c1.96 1.671 2.898 3.963 2.755 6.227" />
			<path d="M19 16v3" />
			<path d="M19 22v.01" />
			{children}
		</SvgIcon>
	);
});

if (__isDev__()) {
	TablerMessageCircleExclamationIcon.displayName = "TablerMessageCircleExclamationIcon";
}
