import type { SvgIconExternalProps } from "@phragon-react/svg-icon";
import type { SVGProps } from "react";
import { SvgIcon } from "@phragon-react/svg-icon";
import React from "react";
import { __isDev__ } from "@phragon-util/global-var";

export interface TablerRubberStampOffIconProps extends SVGProps<SVGSVGElement>, SvgIconExternalProps {}

export const TablerRubberStampOffIcon = React.forwardRef<SVGSVGElement, TablerRubberStampOffIconProps>(
	function TablerRubberStampOffIcon(props, ref) {
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
				<path d="M8.273 8.273c.805 2.341 2.857 5.527 -1.484 5.527c-2.368 0 -3.789 0 -3.789 4.05h14.85" />
				<path d="M5 21h14" />
				<path d="M3 3l18 18" />
				<path d="M8.712 4.722a3.99 3.99 0 0 1 3.288 -1.722a4 4 0 0 1 4 4c0 .992 -.806 2.464 -1.223 3.785m6.198 6.196c-.182 -2.883 -1.332 -3.153 -3.172 -3.178" />
				{children}
			</SvgIcon>
		);
	}
);

if (__isDev__()) {
	TablerRubberStampOffIcon.displayName = "TablerRubberStampOffIcon";
}
